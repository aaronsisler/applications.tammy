import { retrieveDownloadUrl } from 'Firebase/storageUtils';

describe('retrieveDownloadUrl', () => {
    it('should call getDownloadURL() method', async () => {
        const storagePath = 'mockStoragePath';
        const documentName = 'mockDocumentName';
        const downloadUrl = 'mockDownloadUrl';

        const result = await retrieveDownloadUrl(storagePath, documentName);

        expect(result).toBe(downloadUrl);
    });
});
