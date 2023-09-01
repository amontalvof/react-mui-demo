import { CSSProperties } from "react";
// import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
    }
    interface ThemeOptions {
        status: {
            danger: CSSProperties["color"];
        };
    }
    interface Palette {
        neutral?: PaletteColorOptions;
    }
    interface PaletteOptions {
        neutral?: PaletteColorOptions;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
    interface PaletteColor {
        darker?: string;
    }
}