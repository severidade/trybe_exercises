import React from "react";
import TvShow from "./TvShow";
import Catalog from "../Data/SeriesData";

class TvShowList extends React.Component {
  render() {
    return (
      <section>
        {/* <TvShow name={Catalog[0].name} genre={catalog[0].genre}/> */}
        {/* <TvShow tvShowData={Catalog[3]}/> */}
        {
          Catalog.map((item) => {
            return <TvShow tvShowData={item} />
          })
        }
      </section>
    );
  }
}

export default TvShowList;
