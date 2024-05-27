import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Comida deliciosa, entregue direto na sua casa.</h2>
      <p>
        Escolha seu lanche favorito e faça seu pedido.
      </p>
      <p>
      Todas as nossas refeições são preparadas com ingredientes de alta qualidade, no momento do pedido e, é claro, por chefs experientes!
      </p>
    </section>
  );
};

export default MealsSummary;