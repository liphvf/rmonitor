// import { * } as  from "child_process";

import * as child from 'child_process';

// child.exec("ls ~/")
child.exec("cat /proc/meminfo | grep Mem",  (error: Error, stdout: string, stderr: string) => {
    console.log(error);
    console.log(stdout);
    console.log(stderr);
} );
