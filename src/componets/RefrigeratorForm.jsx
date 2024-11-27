import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 


export default function RefrigeratorForm() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        if (option === "specific") {
            navigate("/form"); 
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Вам нужна рассрочка с первым взносом или без первого взноса?</h1>
            <div className="flex flex-col space-y-4">
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="refrigerator"
                        value="specific"
                        className="mr-2"
                        onChange={() => handleOptionChange("specific")}
                        />
                        С первым взносом
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="refrigerator"
                        value="consultation"
                        className="mr-2"
                        onChange={() => handleOptionChange("specific")}

                    />
                  Без первого взноса

                </label>
            </div>
            <div className="flex justify-between mt-[250px]">
                <Link to={"/refrigerator-Options"} className="bg-blue-500 text-white px-4 py-2 rounded">Back</Link>
                <Link to={"/form"} className="bg-blue-500 text-white px-4 py-2 rounded">Next</Link>
            </div>
        </div>
    );
}
