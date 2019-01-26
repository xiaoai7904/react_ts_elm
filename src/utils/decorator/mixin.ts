export const mixin = (constructor: any) => {
  return (target: any) => {
    Object.assign(target.prototype, constructor.prototype);
  };
};
