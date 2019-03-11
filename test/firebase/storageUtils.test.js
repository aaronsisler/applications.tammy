jest.mock('firebase/app');
import { retrieveDownloadUrl } from 'Firebase/storageUtils';

describe('retrieveDownloadUrl()', () => {
    const downloadUrl = 'mockDownloadUrl';

    it('should call getDownloadURL() method', async () => {
        const storagePath = 'mockStoragePath';
        const documentName = 'mockDocumentName';

        const result = await retrieveDownloadUrl(storagePath, documentName);

        expect(result).toBe(downloadUrl);
    });
});
