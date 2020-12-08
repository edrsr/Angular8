import { Component, OnInit } from '@angular/core';
import { Course } from './courses';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
   
    courses: Course[] = [];

   ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Curso - Samba 4 com Debian 10.3 + PfSense + File Server',
                imageUrl: '',
                price: 159.90,
                code: '243A0C6D0D3CA778A881',
                duration: 365,
                rating: 5.4,
                releaseDate: '01/0/2018',
                qtdAlunos: 792
            },
            {
                id: 2,
                name: 'Infraestrutura de TI Com Windows Server 2012 R2',
                imageUrl: '',
                price: 379.90,
                code: '123D0B5BF691562A4BF9',
                duration: 365,
                rating: 5.4,
                releaseDate: '01/01/2019',
                qtdAlunos: 2600
            },
            {
                id: 3,
                name: 'Infraestrutura de TI com Samba4 + AD + Pfsense + File Server',
                imageUrl: '',
                price: 379.90,
                code: '3BE16D18F57FCD5FB200',
                duration: 365,
                rating: 5.4,
                releaseDate: '01/03/2020',
                qtdAlunos: 3100
            },
            {
                id: 4,
                name: 'Ubuntu 18.04 do básico ao avançado',
                imageUrl: '',
                price: 39.90,
                code: 'D49EB269FDC9DBFDB086',
                duration: 365,
                rating: 5.4,
                releaseDate: '01/02/2019',
                qtdAlunos: 10100
            },
            {
                id: 5,
                name: 'Linux Mint 19.3',
                imageUrl: '',
                price: 39.90,
                code: '24E771F2BC284C40B0D4',
                duration: 365,
                rating: 5.4,
                releaseDate: '20/05/2019',
                qtdAlunos: 6800
            },
            {
                id: 6,
                name: 'Linux Ubuntu 18.04 para desenvolvedores',
                imageUrl: '',
                price: 54.90,
                code: 'AA122F126CDBA529D575',
                duration: 365,
                rating: 5.4,
                releaseDate: '20/05/2020',
                qtdAlunos: 600
            }
        ]
    }

}