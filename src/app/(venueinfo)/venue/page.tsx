import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { VenueJson } from "../../../../interface";

export default function Venue(){
  const venues:Promise<VenueJson> = getVenues();

    return(
        <div className="max-w-6xl w-full mx-auto px-4">
          <Suspense fallback={ <p className="text-center my-5">Loading ... <LinearProgress/></p>}>
            <VenueCatalog venuesJson={venues}/>
          </Suspense>
        </div>
    )
}