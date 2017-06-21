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
}