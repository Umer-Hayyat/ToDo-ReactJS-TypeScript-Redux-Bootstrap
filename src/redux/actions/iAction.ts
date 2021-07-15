export default interface iAction<T, P> {
    readonly type: T;
    readonly payload?: P;
}