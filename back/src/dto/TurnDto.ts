interface turnDto{
    date: string;
    time: string;
    userId: number;
    status: "active" | "cancelled";
    details: string;
}

export default turnDto;