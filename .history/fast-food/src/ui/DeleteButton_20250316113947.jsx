function DeleteButton({ pizzaId }) {
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(item.pizzaId))}>
      delete
    </Button>
  );
}

export default DeleteButton;
