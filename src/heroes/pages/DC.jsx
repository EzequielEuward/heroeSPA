import {HeroList} from "../components/HeroList"

export const DC = () => {
  return (
    <>
      <h1 className="text-light animate__animated animate__zoomIn">DC Comics </h1>
      <hr />
      <HeroList publisher='DC Comics'></HeroList>
   
    </>
  )
}

export default DC
