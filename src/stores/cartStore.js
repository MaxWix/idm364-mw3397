import { writable } from "svelte/store";

const initialState = {
  items: [],
  total: 0,
};

function createCart() {
  const { subscribe: originalSubscribe, set, update } = writable(initialState);

  return {
    subscribe: (run) => {
      const unsubscribe = originalSubscribe((state) => {
        console.log("State:", state);
        run(state);
      });
      return unsubscribe;
    },
    addItem: (plant, additionalPrice = 0) =>
      update((state) => {
        const index = state.items.findIndex((item) => item.name === plant.name);
        const effectivePrice = plant.price + additionalPrice;

        // Create a copy of the state and items array
        const newState = { ...state, items: [...state.items] };

        if (index !== -1) {
          newState.items[index] = {
            ...newState.items[index],
            quantity: newState.items[index].quantity + 1,
          };
          newState.total += effectivePrice;
        } else {
          newState.items.push({ ...plant, quantity: 1, price: effectivePrice });
          newState.total += effectivePrice;
        }

        return newState;
      }),
    removeItem: (name) =>
      update((state) => {
        const index = state.items.findIndex((item) => item.name === name);

        if (index !== -1) {
          // Create a copy of the state and items array
          const newState = { ...state, items: [...state.items] };
          newState.total -= newState.items[index].price;
          newState.items = newState.items.filter((item, i) => i !== index);
          return newState;
        }

        return state;
      }),
    reset: () => {
      console.log("Resetting cart...");
      console.log("Initial state:", initialState);
      set({ ...initialState });
    },
  };
}

export const cart = createCart();
