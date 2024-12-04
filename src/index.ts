import { MarkdownService } from "./documentation/service/markdown/MarkdownService";

export class ReportManager {

    public createReport(dbPath: string){
        const markdownService = new MarkdownService(dbPath);
        markdownService.createManagementDocumenation()
    }
}
  