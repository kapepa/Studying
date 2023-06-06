import {FC, useCallback, useEffect, useMemo, useState} from "react";
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation';
import PopupSpeaker from "../../component/PopupSpeaker";
import {useDispatch, useSelector} from "react-redux";
import {getLoaderSelector} from "../../redux/local/selector";
import {setLoaderAction} from "../../redux/local";
import PopupAuthentication from "../../component/PopupAuthentication";

interface PopupsInterface {
  speaker: boolean;
}

const Popups: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const params = useSearchParams();
  const getLoader = useSelector(getLoaderSelector);
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

  const loaderShowHide = useCallback(() => dispatch(setLoaderAction(!getLoader)), [getLoader]);

  useEffect(() => {
    changeQuery(router.query)
  }, [getSpeaker, changeQuery])

  return <>
    { popups.speaker && <PopupSpeaker loader={getLoader} controlLoader={loaderShowHide}/> }
    <PopupAuthentication/>
  </>
}

export default Popups;