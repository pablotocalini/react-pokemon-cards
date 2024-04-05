export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className='text-capitaliza'>
        #{id} - {name}
      </h2>

      <div>
        {sprites.map((sprite) => {
          return (
            <img
              key={sprite}
              src={sprite}
              alt={name}
            />
          );
        })}
      </div>
    </section>
  );
};
