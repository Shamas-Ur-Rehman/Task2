import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RefrigeratorOptions() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === "specific") {
      navigate("/refrigerator-form");
    }
  };

  return (
    <div className="p-5 flex flex-col justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Какой ежемесячный платеж Вам подходит?
      </h1>
      <div className="flex flex-col space-y-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="refrigerator"
            value="specific"
            className="mr-2"
            onChange={() => handleOptionChange("specific")}
          />
          От 19 до 50 ΒΥΝ
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="refrigerator"
            value="consultation"
            className="mr-2"
            onChange={() => handleOptionChange("specific")}
          />
          От 50 до 100 BYN
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="refrigerator"
            value="thinking"
            className="mr-2"
            onChange={() => handleOptionChange("specific")}
          />
          Более 100 BYN
        </label>
      </div>
      <div className="flex justify-between mt-[250px]">
        <Link to={"/"} className="bg-blue-500 text-white px-4 py-2 rounded">
          Back
        </Link>
        <Link
          to={"/refrigerator-form"}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
