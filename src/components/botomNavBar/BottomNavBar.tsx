"use client";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HistoryIcon from "@mui/icons-material/History";
import TuneIcon from "@mui/icons-material/Tune";
import styles from "./bottomnavbar.module.css";
import { toast } from "react-toastify";

const BottomNavBar: React.FC<{ defaultValue: number }> = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  const router = useRouter();

  return (
    <div className={styles.bottomnav_main}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/blur_bg.png"
        alt="bg_img"
        className={styles.bg_img_shadow}
      />
      <Paper
        elevation={3}
        sx={{
          position: "fixed",
          bottom: "14px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "95%",
          maxWidth: "470px",
          borderRadius: "20px",
          background: "rgba(27, 27, 41, 0.9)", // Dark transparent background
          backdropFilter: "blur(4px)", // Glassmorphism effect
          boxShadow: "none",
          padding: "10px",
        }}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            if (newValue === 2) {
              toast.success("Coming Soon!");
              setValue(value); // Revert to previous value
            } else {
              setValue(newValue);

              if (newValue === 0) router.push("/");
              if (newValue === 1) router.push("/history");
            }
          }}
          sx={{
            background: "transparent",
          }}
          showLabels // ✅ Ensures labels are always visible
        >
          <BottomNavigationAction
            label="Offers"
            icon={
              <LocalOfferIcon
                htmlColor={
                  value === 0 ? "var(--primary-color)" : "rgba(255,255,255,0.4)"
                }
              />
            }
            sx={{
              color:
                value === 0 ? "var(--primary-color)" : "rgba(255,255,255,0.4)",
              "& .MuiBottomNavigationAction-label": {
                fontSize: "12px",
                transition: "color 0.3s",
                color:
                  value === 0
                    ? "var(--primary-color)"
                    : "rgba(255,255,255,0.4)",
              },
            }}
          />
          <BottomNavigationAction
            label="History"
            icon={
              <HistoryIcon
                htmlColor={
                  value === 1 ? "var(--primary-color)" : "rgba(255,255,255,0.4)"
                }
              />
            }
            sx={{
              color:
                value === 1 ? "var(--primary-color)" : "rgba(255,255,255,0.4)",
              "& .MuiBottomNavigationAction-label": {
                fontSize: "12px",
                transition: "color 0.3s",
                color:
                  value === 1
                    ? "var(--primary-color)"
                    : "rgba(255,255,255,0.4)",
              },
            }}
          />
          <BottomNavigationAction
            label="Filter"
            icon={
              <TuneIcon
                htmlColor={
                  // value === 2 ? "var(--primary-color)" : "rgba(255,255,255,0.4)"
                  "rgba(255,255,255,0.4)"
                }
              />
            }
            sx={{
              color:
                // value === 2 ? "var(--primary-color)" : "rgba(255,255,255,0.4)",
                "rgba(255,255,255,0.4)",
              "& .MuiBottomNavigationAction-label": {
                fontSize: "12px",
                transition: "color 0.3s",
                // color:
                //   value === 2
                //     ? "var(--primary-color)"
                //     : "rgba(255,255,255,0.4)",
                color: "rgba(255,255,255,0.4)",
              },
            }}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default BottomNavBar;
