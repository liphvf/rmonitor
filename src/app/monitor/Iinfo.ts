export interface Iinfo {
    Memory:  {
        total: any;
        free: any;
        used: any;
        active: any;
        available: any;
        buffcache: any;
        swaptotal: any;
        swapused: any;
        swapfree: any;
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