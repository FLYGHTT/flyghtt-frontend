import React from "react";
import { Factor } from "@/types";
import { styles } from "../../styles";

const ColumnFactors = ({ factors }: { factors: Factor[] }) => {
  return (
    <div className="mt-6 w-full flex flex-col gap-3">
      {factors.map((item, idx) => (
        <>
          {item.name && (
            <div className="flex gap-4 w-full " key={idx}>
              <div>
                <div className="bg-gray-500 text-white rounded-full w-6 h-6 text-sm justify-center flex items-center">
                  {idx + 1}
                </div>
              </div>
              <div className="w-full">
                <h2>{item.name}</h2>
                <input
                  type="text"
                  value={item.value}
                  className={styles.input}
                  name="value"
                />
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default ColumnFactors;
