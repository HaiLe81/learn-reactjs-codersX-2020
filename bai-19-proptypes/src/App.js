import React from "react";
import "./styles.css";
import RecommendedFriends from "./components/RecommendedFriends/RecommendedFriends";
export default function App() {
  const friends = [
    {
      name: "Lê Khắc Hải",
      url:
        "http://res.cloudinary.com/hai-le/image/upload/v1588503812/m67bhun82sxkvse1ssld.png"
    },
    {
      name: "Nguyễn Phúc Nguyên Vy",
      url:
        "http://res.cloudinary.com/hai-le/image/upload/v1588503812/m67bhun82sxkvse1ssld.png"
    },
    {
      name: "Nguyễn Ngọc Cảnh",
      url:
        "http://res.cloudinary.com/hai-le/image/upload/v1588503812/m67bhun82sxkvse1ssld.png"
    },
    {
      name: "Nguyễn Hồ Quốc Đạt",
      url:
        "http://res.cloudinary.com/hai-le/image/upload/v1588503812/m67bhun82sxkvse1ssld.png"
    },
    {
      name: "Ngô Đông Quân",
      url:
        "http://res.cloudinary.com/hai-le/image/upload/v1588503812/m67bhun82sxkvse1ssld.png"
    }
  ];
  return (
    <div className="App">
      <RecommendedFriends friends={friends} />
    </div>
  );
}
