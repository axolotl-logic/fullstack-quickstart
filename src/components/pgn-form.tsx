"use client";

import { type ChangeEvent } from "react";
import { submitPGN } from "~/actions/analyze";

export function PGNForm() {
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }

    const [file] = e.target.files;
    if (!file) {
      return;
    }

    const pgnText = await file.text();

    await submitPGN(pgnText);
  };

  return (
    <form className="flex flex-wrap">
      <input
        type="file"
        onChange={onChange}
        className="file-input file-input-bordered file-input-primary w-full max-w-xs sm:rounded-r-none"
      />
      <button type="submit" className="btn btn-primary sm:rounded-l-none">
        Analyze
      </button>
    </form>
  );
}
