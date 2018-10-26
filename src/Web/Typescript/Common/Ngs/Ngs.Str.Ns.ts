//Namespace way

namespace Ngs {
    export namespace Str {
        export function IsNullOrEmpty(val: string | null | undefined): boolean {
            return val === undefined || val === null || val === "";
        }
    }
    
}