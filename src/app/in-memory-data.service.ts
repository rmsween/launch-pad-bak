import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let launches = [
            {
                id: 1,
                division: 'PLN',
                project: 'Canada\s Luckiest Baby 6',
                clientApproval: null,
                launchDate: new Date("2017-12-15 00:00:01"),
            },
            {
                id: 2,
                division: 'SLN',
                project: 'Accepted',
                clientApproval: new Date("2017-02-01 00:00:01"),
                launchDate: new Date("2017-02-15 00:00:01"),
            },
            {
                id: 3,
                division: 'SLN',
                project: 'Thank You Mom & Dad',
                clientApproval: new Date("2017-02-01 00:00:01"),
                launchDate: new Date("2017-12-15 00:00:01"),
            },
            {
                id: 4,
                division: 'PLN',
                project: 'PLN Answers',
                clientApproval: null,
                launchDate: new Date("2017-02-15 00:00:01"),
            },
            {
                id: 5,
                division: 'SLN',
                project: 'Accepted',
                clientApproval: new Date("2017-02-01 00:00:01"),
                launchDate: new Date("2017-02-15 00:00:01"),
            },
            {
                id: 6,
                division: 'SLN',
                project: 'Accepted',
                clientApproval: new Date("2017-02-01 00:00:01"),
                launchDate: new Date("2017-12-15 00:00:01"),
            },
            {
                id: 7,
                division: 'PLN',
                project: 'Canada\s Luckiest Baby 6',
                clientApproval: null,
                launchDate: new Date("2017-12-15 00:00:01"),
            },
            {
                id: 8,
                division: 'SLN',
                project: 'Accepted',
                clientApproval: new Date("2017-02-01 00:00:01"),
                launchDate: new Date("2017-02-15 00:00:01"),
            }
        ];
        return {launches};
    }
}
