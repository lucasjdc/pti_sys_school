export interface IService{
    create(data: IUserPF | IUserPJ): Promise<IUserPF | IUserPJ>
    list(): Promise<IUserPF[] | IUserPJ[]>
}