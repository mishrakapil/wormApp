class HttpNativeError extends Error {
    mute: boolean;
    // Need to make this more robust
    constructor(public message: string,public code?: number,public clientCode?:number,mute?:boolean) {
      super(message);
      this.name = "HttpNativeError";
      this.code = code;
      this.clientCode = clientCode;
      this.stack = (<any> new Error()).stack;
      this.mute =mute;
    }
  
  }
  
  export default HttpNativeError;