import Firstbar from "./Firstbar";
import Fourthbar from "./Fourthbar";
import Secondbar from "./Secondbar";
import Thirdbar from "./Thirdbar";
import Fifthbar from "./Fifthbar";
import Sixthbar from "./Sixthbar";
import Seventhbar from "./Seventhbar";

function Website() {
  return (
    <div>
      <Firstbar />
      <Secondbar />
      <Thirdbar />
      <Fourthbar />
      <Fifthbar />
      <Sixthbar />
      <Seventhbar />
      <div>
        <hr className="border-red-500 border-spacing-9 my-5" />
        <div>Prank</div>
      </div>
    </div>
  );
}

export default Website;
