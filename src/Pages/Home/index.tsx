import React, { useEffect } from "react";
import logging from "../../config/logging";
import IPage from "../../interfaces/page";

export const Home: React.FC<IPage> = ({ name }) => {
  useEffect(() => {
    logging.info(`[${name}] Loading`);
  }, [name]);
  return (
    <>
      <div>
        <p>Home</p>
      </div>
    </>
  );
};
