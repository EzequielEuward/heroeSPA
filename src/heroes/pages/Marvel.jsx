import {HeroList} from "../components/HeroList"


export const Marvel = () => {
  return (
    <>
      <h1 className="text-light animate__animated animate__zoomIn">Marvel Comics </h1>
      <hr />
      <HeroList publisher='Marvel Comics'></HeroList>
   
    </>
)}

export default Marvel
