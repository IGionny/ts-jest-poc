import {Ngs} from '../Common/Ngs/Ngs.Str.Ns'

export const ModuleUsage = {
    Str: {
        IsNullOrEmpty(x: string): boolean {
            return Ngs.Str.IsNullOrEmpty(x);
        }
    }
};
