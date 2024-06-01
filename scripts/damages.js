// Adds a new Naruto damages type that will be selectable as a new type of damage for weapons and a new type of resistance for actors.
Hooks.once("init", () => {
    CONFIG.DND5E.damageTypes.chakra = {
      label: "Chakra",
      isPhysical: true
    };
    CONFIG.DND5E.damageTypes.earth = {
        label: "Earth",
        isPhysical: true
      };
      CONFIG.DND5E.damageTypes.wind = {
        label: "Wind",
        isPhysical: true
      };
  });
