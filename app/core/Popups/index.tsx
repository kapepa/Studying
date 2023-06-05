import {FC, useCallback, useEffect, useMemo, useState} from "react";
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation';

import PopupSpeaker from "../../component/PopupSpeaker";

interface PopupsInterface {
  speaker: boolean;
}

const Popups: FC = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [popups, setPopups] = useState<PopupsInterface>({
    speaker: false,
  });

  const getSpeaker = params.get('speaker');

  const changeQuery = useCallback((query) => {
    for (let key in query) {
      if(query[key] === 'true') return setPopups((prev) => ({ ...popupsOpenClose(prev), [key]: true }));
    }

    return setPopups((prev) => ({ ...popupsOpenClose(prev) }));
  },[]);

  const popupsOpenClose = (popups: PopupsInterface) => {
    return Object.keys(popups).reduce((accum, key) => {
      accum[key] = false;
      return accum;
    }, popups)
  }


  useEffect(() => {
    changeQuery(router.query)
  }, [getSpeaker, changeQuery])

  return <>
    { popups.speaker && <PopupSpeaker/>}
  </>
}

export default Popups;