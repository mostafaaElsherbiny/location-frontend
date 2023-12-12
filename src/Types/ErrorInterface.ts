export default interface ErrorInterface {
  hasError: boolean;
  msg: string;
  args: {
    message: string;
    path: string;
  }[];
}
