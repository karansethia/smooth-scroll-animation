import React, { SetStateAction } from 'react'
import { motion } from 'motion/react';

type NavButtonProps = {
  text: string,
  selected: boolean,
  setSelected: (id: string) => void
}

const NavButton = ({text, selected, setSelected}: NavButtonProps) => {
  return (
  <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  )
}

export default NavButton;
