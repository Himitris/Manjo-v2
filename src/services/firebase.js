// src/services/firebase.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

// Configuration Firebase depuis les variables d'environnement
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Fonctions pour les réservations
export const creerReservation = async (reservation) => {
  try {
    const docRef = await addDoc(collection(db, "reservations"), {
      ...reservation,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Erreur création réservation:", error);
    throw error;
  }
};

export const getCreneauxDisponibles = async (date) => {
  try {
    const q = query(collection(db, "creneaux"), where("date", "==", date));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Créer les créneaux par défaut si ils n'existent pas
      await initialiserCreneauxPourDate(date);
      return getCreneauxDisponibles(date);
    }

    const creneaux = [];
    querySnapshot.forEach((doc) => {
      creneaux.push({ id: doc.id, ...doc.data() });
    });

    return creneaux.sort((a, b) => a.heure.localeCompare(b.heure));
  } catch (error) {
    console.error("Erreur récupération créneaux:", error);
    throw error;
  }
};

const initialiserCreneauxPourDate = async (date) => {
  const creneauxHeures = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
  ];

  for (const heure of creneauxHeures) {
    await addDoc(collection(db, "creneaux"), {
      date,
      heure,
      nbPlacesDisponibles: 20,
    });
  }
};
