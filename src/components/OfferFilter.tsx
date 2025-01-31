// import { Box, Button } from "@mui/material";
// import SortIcon from "@mui/icons-material/Sort";
// import FilterListIcon from "@mui/icons-material/FilterList";

// const OfferFilters: React.FC = () => {
//     return (
//         <Box sx={{ display: "flex", gap: 2, p: 2, justifyContent: "center" }}>
//             <Button variant="contained" startIcon={<SortIcon />}>
//                 Sort
//             </Button>
//             <Button variant="contained" startIcon={<FilterListIcon />}>
//                 Filter
//             </Button>
//         </Box>
//     );
// };

// export default OfferFilters;
"use client";
import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort"; // Sort icon
import FilterListIcon from "@mui/icons-material/FilterList"; // Filter icon

const OfferFilter = () => {
    const [sortAnchor, setSortAnchor] = useState<null | HTMLElement>(null);
    const [filterAnchor, setFilterAnchor] = useState<null | HTMLElement>(null);

    const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSortAnchor(event.currentTarget);
    };

    const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setFilterAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setSortAnchor(null);
        setFilterAnchor(null);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "94%",
                bgcolor: "var(--card-bg)",
                borderRadius: "12px",
                padding: 1,
                margin: "15px 10px 10px 10px",
            }}
        >
            {/* Sort Button */}
            <Button
                onClick={handleSortClick}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    textTransform: "none",
                    width: "fit-content",
                    fontSize: "16px",
                    gap: 1,
                }}
            >
                <SortIcon sx={{ color: "var(--primary-color)" }} />
                <Typography>Sort</Typography>
            </Button>

            {/* Sort Dropdown */}
            <Menu
                anchorEl={sortAnchor}
                open={Boolean(sortAnchor)}
                onClose={handleClose}
                // sx={{ bgcolor: "var(--secondary-background)" }}
                sx={{ bgcolor: "#4444", backdropFilter: "blur(5px)" }}
            >
                <MenuItem onClick={handleClose}>Newest</MenuItem>
                <MenuItem onClick={handleClose}>Oldest</MenuItem>
                <MenuItem onClick={handleClose}>Highest Coins</MenuItem>
                <MenuItem onClick={handleClose}>Lowest Coins</MenuItem>
            </Menu>

            {/* Filter Button */}
            <Button
                onClick={handleFilterClick}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    textTransform: "none",
                    fontSize: "16px",
                    gap: 1,
                }}
            >
                <FilterListIcon sx={{ color: "var(--primary-color)" }} />
                <Typography>All</Typography>
            </Button>

            {/* Filter Dropdown */}
            <Menu
                anchorEl={filterAnchor}
                open={Boolean(filterAnchor)}
                onClose={handleClose}
                // sx={{ bgcolor: "var(--secondary-background)" }}
                sx={{ bgcolor: "#4444", backdropFilter: "blur(5px)" }}
            >
                <MenuItem onClick={handleClose}>All</MenuItem>
                <MenuItem onClick={handleClose}>Only Apps</MenuItem>
                <MenuItem onClick={handleClose}>YouTube Tasks</MenuItem>
                <MenuItem onClick={handleClose}>Instagram Tasks</MenuItem>
            </Menu>
        </Box>
    );
};

export default OfferFilter;