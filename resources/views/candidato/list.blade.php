@extends('layouts.app')
 
@section('content')
    <div class="container">
        <div class="row  justify-content-center">
            <div class="col-md-10 text-center  shadow-lg rounded p-3 mb-3" style="background-color:white">   
                <h2>
                    <span class="badge bg-dark text-white">#VemProIF-2022</span> 
                    <br>Lista de Inscritos</h2>
                </h2>
            </div>
        </div>
        
        <div class="row  justify-content-center">
            <div class="col-md-10">
                <table class="table bg-white table-striped  table-hover  shadow-lg rounded p-3 mb-5">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Nível</th>
                    <th scope="col">Curso</th>
                    </tr>
                </thead>
                <tbody>
                @foreach($candidatos as $candidato)
                    <tr>
                    <th scope="row">{{$candidato->id}}</th>
                    <td>{{ strtoupper($candidato->nome) }}</td>
                    <td>{{ strtolower($candidato->email) }}</td>
                    <td>{{$candidato->telefone}}</td>
                    <td>{{$candidato->nivel_curso}}</td>
                    <td>{{$candidato->curso}}</td>
                    </tr>
                @endforeach
                </tbody>
                <caption>
                    Total {{ count($candidatos) }}
                </caption>
                </table>
            </div>
        </div>
    </div>
@endsection