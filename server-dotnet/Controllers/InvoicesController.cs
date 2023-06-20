using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Invoices.Domain.Entities;
using Invoices.Domain.Interfaces;


namespace server_dotnet.Controllers;

[ApiController]
[Route("[controller]")]
public class InvoicesController : ControllerBase
{
    private readonly ILogger<InvoicesController> _logger;
    private readonly IUnitOfWork _unitOfWork;


    public InvoicesController(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;

    }

    [HttpGet]
    public ActionResult<List<Invoice>> GetAsync()
    {
        var invoices = _unitOfWork.InvoiceRepository.GetAll();
        return Ok(invoices);
    }
}
