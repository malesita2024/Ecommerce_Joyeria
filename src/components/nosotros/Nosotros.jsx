import { useEffect } from "react";

const Nosotros = () => {
  useEffect(() => {
    const clickear = () => {
      console.log("Click");
    };

    window.addEventListener("click", clickear);

    return () => {
      window.removeEventListener("click", clickear);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Nosotros</h1>
        <p>Este es el componente &apos; Nosotros &apos;</p>
      </div>
    </>
  );
};

export default Nosotros;
