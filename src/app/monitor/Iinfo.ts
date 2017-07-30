export interface Iinfo {
    Memory:  {
        total: number;
        free: number;
        used: number;
        active: number;
        available: number;
        buffcache: number;
        swaptotal: number;
        swapused: number;
        swapfree: number;
    };
    CpuLoad: {
        avgload: number;
        currentload: number;
        currentload_user: number;
        currentload_system: number;
        currentload_nice: number;
        currentload_irq:number;
    };
    FsStats:{
        rx:any;
        ww:any;
        tx:any
        rx_sec:any;
        wx_sec:any;
        tx_sec:any;
        ms:any;
    };
    Network:{
        iface:any;
        operstate:any;
        rx:any;
        tx:any;
        rx_sec:any;
        tx_sec:any;
        ms:any;
    };
}