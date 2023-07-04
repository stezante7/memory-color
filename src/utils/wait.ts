export const wait = (time: number) =>
  new Promise((res) => {
    const timer = setTimeout(() => {
      res(undefined);
      clearTimeout(timer);
    }, time);
  });
