import React, {useState, FC } from 'react';
import {Button} from "@nextui-org/react";

interface TitleProps {
  title: string;
  loadingTitle: string;
}

const LoadingButton: FC<TitleProps> = ({ title, loadingTitle }) => {
    const [loading, setLoading] = useState(false);
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function clalback_init() {
        setLoading(true)
        await sleep(1000);
        setLoading(false)
    }

    return (
    <div className="flex py-2 px-1 justify-center">
            <Button className="w-full" radius="full" color="primary" variant="ghost" isLoading={loading}
                    onClick={clalback_init}>{!loading ? title : loadingTitle}</Button>
        </div>
  );
};

export default LoadingButton;