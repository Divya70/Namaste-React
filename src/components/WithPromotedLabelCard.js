import Cards from "./Cards";
const WithPromotedLabel = (Cards) => {
    return () => {
      return (
        <>
          <label>Promoted</label>
          <Cards/>
        </>
      );
    };
  };
  export default WithPromotedLabel ;