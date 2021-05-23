import React, { useCallback, useState } from "react";
import { Button } from "../../views/loggedInRoutes/mainView/styles";
import { TextError, AbsoluteWrapp } from "./styles";

type ErrorProps = {
  error: string | null;
  pending: boolean;
  onRecharge: () => void;
};

const ErrorModal = ({ error, pending, onRecharge }: ErrorProps) => {
  const [loadingRecharge, setLoadingRecharge] = useState(false);

  const onClick = useCallback(() => {
    setLoadingRecharge(true);
    onRecharge();
    setTimeout(() => {
      setLoadingRecharge(false);
    }, 2000);
  }, [onRecharge]);

  if (!error) {
    return null;
  }
  return (
    <AbsoluteWrapp>
      <TextError>{loadingRecharge ? "Loading..." : error}</TextError>
      <Button
        disabled={loadingRecharge || pending}
        onClick={loadingRecharge || pending ? undefined : onClick}
      >
        Recharge
      </Button>
    </AbsoluteWrapp>
  );
};

export default ErrorModal;
