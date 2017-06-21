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
        avgload: any;
        currentload: any;
        currentload_user: any;
        currentload_system: any;
        currentload_nice: any;
        currentload_irq:any;
    };
}