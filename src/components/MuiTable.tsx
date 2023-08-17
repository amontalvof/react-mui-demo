import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const tableData = [
    {
        id: 1,
        first_name: "Jacquelynn",
        last_name: "Vaune",
        email: "jvaune0@gov.uk",
        gender: "Female",
        ip_address: "105.179.246.102",
    },
    {
        id: 2,
        first_name: "Minor",
        last_name: "Sedger",
        email: "msedger1@archive.org",
        gender: "Male",
        ip_address: "20.49.148.113",
    },
    {
        id: 3,
        first_name: "Cece",
        last_name: "Shippard",
        email: "cshippard2@rambler.ru",
        gender: "Male",
        ip_address: "173.193.194.224",
    },
    {
        id: 4,
        first_name: "Penny",
        last_name: "Beazleigh",
        email: "pbeazleigh3@imageshack.us",
        gender: "Male",
        ip_address: "166.139.146.29",
    },
    {
        id: 5,
        first_name: "Wilhelmine",
        last_name: "McInteer",
        email: "wmcinteer4@xrea.com",
        gender: "Female",
        ip_address: "90.86.208.97",
    },
    {
        id: 6,
        first_name: "Kale",
        last_name: "Crowcum",
        email: "kcrowcum5@telegraph.co.uk",
        gender: "Male",
        ip_address: "226.1.12.149",
    },
    {
        id: 7,
        first_name: "Gracie",
        last_name: "Geill",
        email: "ggeill6@whitehouse.gov",
        gender: "Female",
        ip_address: "138.14.154.136",
    },
    {
        id: 8,
        first_name: "Burke",
        last_name: "Brailey",
        email: "bbrailey7@howstuffworks.com",
        gender: "Male",
        ip_address: "179.26.107.232",
    },
    {
        id: 9,
        first_name: "Margalit",
        last_name: "Banishevitz",
        email: "mbanishevitz8@webeden.co.uk",
        gender: "Female",
        ip_address: "204.237.226.152",
    },
    {
        id: 10,
        first_name: "Vonny",
        last_name: "Becken",
        email: "vbecken9@printfriendly.com",
        gender: "Female",
        ip_address: "1.69.43.44",
    },
];

const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item) => (
                        <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.first_name}</TableCell>
                            <TableCell>{item.last_name}</TableCell>
                            <TableCell align="center">{item.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MuiTable;