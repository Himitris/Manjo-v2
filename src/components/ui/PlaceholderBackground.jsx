const PlaceholderBackground = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-forest-green via-dark-gray to-rusty-orange">
      {/* Effet de texture avec des formes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pale-gold rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-peach rounded-full filter blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-forest-green rounded-full filter blur-2xl"></div>
      </div>

      {/* Motif de superposition */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      ></div>
    </div>
  );
};

export default PlaceholderBackground;
