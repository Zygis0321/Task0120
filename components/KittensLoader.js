import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import GetKittenArray from "../services/KittenArrayService";
import { updateKittens } from "../store/kittens/KittensActions";

const kittensNumberToLoad = 100;

export default function KittensLoader({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    let kittens = GetKittenArray(kittensNumberToLoad);
    dispatch(updateKittens(kittens));
  }, []);

  return <>{children}</>;
}
