import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <h1 className="text-2xl sm:text-5xl font-semibold text-center">
        <p>Unilever</p>
        <p>Emergency Response Team</p>
      </h1>
      <div className="flex flex-col gap-3">
        <Link href="/slides">
          <Button variant="contained">
            Slide Page
          </Button>
        </Link>
        <Link href='/admin'>
          <Button variant="outlined">
            Admin Page
          </Button>
        </Link>
      </div>
    </div>
  );
}
