function DeleteButton({ pizzaId }) {
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      delete
    </Button>
  );
}

export default DeleteButton;
