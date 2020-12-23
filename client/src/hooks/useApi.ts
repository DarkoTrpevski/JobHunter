import { useState, useEffect } from "react";
import axios from "axios";

/**
 * useApi Hook used for fetching data
 * Fetching can be stopped by using the skip argument.
 * That is usefull, when we want to gather some data before fetching(like some ID)
 */


export const useApi = (url: string, skip: boolean) => {

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const refresh = () => {
    setRefreshIndex(refreshIndex + 1);
  };

  const fetchData = async (isCancelled: boolean) => {
    try {
      if (skip) {
        setResult(null);
        setLoading(false);
        setLoaded(false);
      } else {
        setLoading(true);
        const res = await axios.get(url);
        if(!isCancelled) {
          setResult(res.data);
          setLoading(false);
          setLoaded(true);
        }
      }
    } catch (err: any) {
      setLoading(false);
      if (err.response) {
        setError(err.response.data);
      } else {
        setError(err.message);
      }
    }
  }

  useEffect(() => {    
    let cancelled = false;
    fetchData(cancelled);
    return () => {
      cancelled = true;
    };    
  }, [url, refreshIndex]);

  return [result, loading, loaded, error, refresh, setResult];
}